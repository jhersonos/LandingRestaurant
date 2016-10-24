const cache_name="ya cache v2"
const cache_urls = ["/offline/view.html","/offline/style.css","/offline/off.png"]

self.addEventListener("install",function(ev){
	console.log("ServiceWorkers instalado")
	caches.open(cache_name)
		.then(function(cache){
			//console.log("cache opened")
			return cache.addAll(cache_urls)
		})
})

self.addEventListener("fetch",function(ev){
	//console.log(ev.request)
	ev.respondWith(
		caches.match(ev.request)
			.then(function(response){
				if (response) {
					return response
				}

				return fetch(ev.request)
			})
		)
})
