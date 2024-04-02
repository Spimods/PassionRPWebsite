fetch("https://servers-frontend.fivem.net/api/servers/single/prayza")
.then(response => response.json())
.then(response => alert(JSON.stringify(response[0])))

              
