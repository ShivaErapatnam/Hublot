# Sometimes the network is still around, perhaps due to a reboot. Let's clean it up just in case.
$config = docker compose config --format json | ConvertFrom-Json
$filter = "name=$($config.networks.default.name)"
docker network ls --filter $filter -q | ForEach-Object {
    docker network rm $_
}