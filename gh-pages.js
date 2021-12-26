import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/7nik/math-examples.git', // Update to point to your repository
        user: {
            name: '7nik', // update to use your name
            email: 'kifiranet@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
