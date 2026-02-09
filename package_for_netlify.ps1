$base = Split-Path -Parent $MyInvocation.MyCommand.Definition
$dest = Join-Path $base 'valentines.zip'
if(Test-Path $dest){ Remove-Item $dest -Force }
Write-Output "Creating $dest from folder $base..."
Compress-Archive -Path (Join-Path $base '*') -DestinationPath $dest -Force
Write-Output "Created: $dest"
Write-Output "Upload this file at https://app.netlify.com/drop or unzip and drag the folder instead."
