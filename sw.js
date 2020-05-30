const CACHE_NAME = 'cache-1';

self.addEventListener('install', e => {


    const cacheProm = caches.open( CACHE_NAME )
        .then( cache => {

            return cache.addAll([
                '/',
                'index.html',
                'estilo.css',
                'app.js',
                'anthorn2.mp3',
                'coche_8.mp3',
                'trucks036.mp3',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
                'img/favicon.ico',
                'img/Foto_Pesas.jpg',
                'img/android-icon-192x192.png',
                'img/apple-icon-57x57.png',
                'img/apple-icon-60x60.png',
                'img/apple-icon-72x72.png',
                'img/apple-icon-76x76.png',
                'img/apple-icon-114x114.png',
                'img/apple-icon-120x120.png',
                'img/apple-icon-144x144.png',
                'img/apple-icon-152x152.png',
                'img/apple-icon-180x180.png',
                'img/favicon-16x16.png',
                'img/favicon-32x32.png',
                'img/favicon-96x96.png',
                'img/favicon-256x256.png',
                'img/ms-icon-70x70.png',
                'img/ms-icon-144x144.png',
                'img/ms-icon-150x150.png',
                'img/ms-icon-310x310.png',
                'img/apple-launch-640x1136.png',
                'img/apple-launch-1125x2436.png',
                'img/apple-launch-1242x2208.png',
                'img/apple-launch-750x1334.png'
            ]);

        
        });

    


    e.waitUntil( cacheProm );

});


self.addEventListener('fetch', e =>{

	  const respuesta = caches.match( e.request )
         .then( res => {
             if ( res ) return res;

             // No existe el archivo
             // tengo que ir a la web
             console.log('No existe', e.request.url );


             return fetch( e.request ).then( newResp => {

                 caches.open( CACHE_NAME )
                     .then( cache => {
                         cache.put( e.request, newResp );
                         
                     });

                 return newResp.clone();
             });


         });




     e.respondWith( respuesta );
});