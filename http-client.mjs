import https from "https";

const endpoint = "https://eoyilcqg77qsevg.m.pipedream.net";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive: ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Kevin",
    lastName: "Nugraha",
})

request.write(body);
request.end();