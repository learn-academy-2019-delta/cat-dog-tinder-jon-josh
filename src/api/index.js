// the address of our rails backend, saved as a constant value, because we never want to accidentally change it
// Cloud9 users: This will be your IP address found under the 'Share' link
const BASE = 'http://localhost:3000'

let getSuperhero = function() {

	return fetch(BASE + '/superheros')
		.then((resp) => {

			let json = resp.json()
			console.log(json);
			return json
		})
}

let createSuperhero = function(superhero) {
    return fetch(BASE + '/superheros', {
        body: JSON.stringify(superhero),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
        })
        .then((resp) => {
            let json = resp.json()
            return json
    })
}

let deleteSuperhero = function(id) {
    return fetch(BASE + '/superheros/' + id, {

        headers: {
            'Content-Type': 'application/json'
        },
        method: "DELETE"
        })
        .then((resp) => {
            let json = resp.json()
            return json
    })
}

export  {
	getSuperhero, createSuperhero, deleteSuperhero
}
