var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Raffaele/svelte-route-boilerplate',
        user: {
            name: 'Raffaele',
            email: 'mori.raffaele@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)