
var cachename="pwa";
var filescache={
  '/',
  '/index.html'
}
self.addEventListener('install',function(e){
  console.log("installed successfully...!");
  e.waituntil(
    caches.open(cachename).then(function(ca){
      console.log("catching files from cache");
      return ca.addall(filescache);
    })
  )
})
self.addEventListener('activate',function(e){
  console.log("activated successfully...!");
  e.waituntil(
    caches.keys().then(function(c){
      return Promise.all(c.map(function(thiscache){
        if(thiscache i==cachename);
        console.log("service worker removing files");
      }
  }))
})
)
self.addEventListener('fetch',function(e){
  console.log("fetched successfully...!");
  fetch()
})
