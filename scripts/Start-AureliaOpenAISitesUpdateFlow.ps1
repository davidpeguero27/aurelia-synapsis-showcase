param(
    [switch]$SkipGitHubPages,
    [switch]$TryOpenAISitesPush
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
    param(
        [string[]]$GitArgs,
        [string]$WorkDir
    )

    $previousErrorActionPreference = $ErrorActionPreference

    try {
        $ErrorActionPreference = "Continue"
        Push-Location $WorkDir
        try {
            $output = @(& git @GitArgs 2>&1)
        }
        finally {
            Pop-Location
        }
        $exit = $LASTEXITCODE
    }
    finally {
        $ErrorActionPreference = $previousErrorActionPreference
    }

    return [ordered]@{
        exit_code = $exit
        output = (($output | ForEach-Object { $_.ToString() }) -join "`n")
    }
}

function New-Status {
    param(
        [string]$State,
        [string]$Message,
        [hashtable]$Extra = @{}
    )

    $status = [ordered]@{
        success = ($State -eq "complete")
        mode = "aurelia_openai_sites_update_flow_standalone"
        state = $State
        message = $Message
        timestamp = (Get-Date).ToString("o")
        safety = [ordered]@{
            secrets_logged = $false
            duplicate_site_created = $false
            final_external_confirmation_automated = $false
            requires_human_for_auth = ($State -eq "requires_human_auth")
        }
    }

    foreach ($key in $Extra.Keys) {
        $status[$key] = $Extra[$key]
    }

    $statusPath = Join-Path $PSScriptRoot "..\dist\aurelia_openai_sites_update_status.json"
    $status | ConvertTo-Json -Depth 8 | Set-Content -Path $statusPath -Encoding UTF8
    return $status
}

$showcasePath = Resolve-Path (Join-Path $PSScriptRoot "..")

if (-not (Test-Path (Join-Path $showcasePath "package.json"))) {
    throw "Showcase project not found at: $showcasePath"
}
if (-not (Test-Path (Join-Path $showcasePath ".openai\hosting.json"))) {
    throw "OpenAI Sites hosting.json not found at: $showcasePath"
}

Push-Location $showcasePath
try {
    Write-Host "Aurelia OpenAI Sites update flow"
    Write-Host "Preparing public showcase source..."

    npm run build
    if ($LASTEXITCODE -ne 0) {
        New-Status -State "failed" -Message "Build failed before any publish attempt." -Extra @{
            showcase_path = $showcasePath.Path
        } | Format-List
        exit 1
    }

    $head = (& git rev-parse HEAD).Trim()
    $remoteOrigin = (& git remote get-url origin 2>$null)
    $remoteGithub = (& git remote get-url github 2>$null)

    if (-not $SkipGitHubPages) {
        Write-Host "Publishing GitHub Pages source..."
        $pushGithub = Invoke-Git -GitArgs @("push", "github", "main") -WorkDir $showcasePath.Path
        if ($pushGithub.exit_code -ne 0) {
            New-Status -State "failed" -Message "GitHub Pages push failed." -Extra @{
                showcase_path = $showcasePath.Path
                commit = $head
                github_remote = $remoteGithub
                github_push_output = $pushGithub.output
            } | Format-List
            exit 1
        }
    }

    if ($TryOpenAISitesPush) {
        Write-Host "Trying OpenAI Sites source sync..."
        $openAiResult = Invoke-Git -GitArgs @("push", "origin", "HEAD:main") -WorkDir $showcasePath.Path
        if ($openAiResult.exit_code -ne 0) {
            $authText = $openAiResult.output
            if ($authText -match "Authentication required|Authentication failed|could not read Username|terminal prompts disabled") {
                New-Status -State "requires_human_auth" -Message "OpenAI Sites source sync is prepared, but the remote requires authentication. Reconnect the existing Aurelia Synapsis Showcase source, then rerun this script." -Extra @{
                    showcase_path = $showcasePath.Path
                    commit = $head
                    openai_sites_remote = $remoteOrigin
                    github_pages_remote = $remoteGithub
                    public_pages_url = "https://davidpeguero27.github.io/aurelia-synapsis-showcase/"
                    submitted_sites_url = "https://aurelia-synapsis-showcase.davidpeguero27.chatgpt.site"
                    blocked_step = "git push origin HEAD:main"
                    auth_output_redacted = ($authText -replace "https://[^@\s]+@", "https://<redacted>@")
                } | Format-List
                exit 2
            }

            New-Status -State "failed" -Message "OpenAI Sites source sync failed for a non-auth reason." -Extra @{
                showcase_path = $showcasePath.Path
                commit = $head
                openai_sites_remote = $remoteOrigin
                openai_push_output = $openAiResult.output
            } | Format-List
            exit 1
        }
    }

    New-Status -State "complete" -Message "Showcase update flow completed for available channels." -Extra @{
        showcase_path = $showcasePath.Path
        commit = $head
        github_pages_remote = $remoteGithub
        openai_sites_remote = $remoteOrigin
        public_pages_url = "https://davidpeguero27.github.io/aurelia-synapsis-showcase/"
        submitted_sites_url = "https://aurelia-synapsis-showcase.davidpeguero27.chatgpt.site"
        openai_sites_attempted = [bool]$TryOpenAISitesPush
    } | Format-List
}
finally {
    Pop-Location
}
