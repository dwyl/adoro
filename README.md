# *adoro*

***What if*** there was an ***obviously better*** way
of ***publishing content*** on the web...?

## *Try it*: https://adorote.herokuapp.com

## Basic Features

+ [ ] Effortless Publishing (*pushing content to GitHub Automatically Deploy to connected Heroku App*)
- [x] Write posts in Markdown
- [x] Produces ***Valid HTML***
- [x] Summary View (newest first)
- [x] Summary View Post Title(s) Clickable
- [x] Full View
- [ ] Tests (Lab) for basic functionality
- [ ] Re-write to use Templating Library
- [ ] **Continue reading** link? or just **...** ?
- [ ] Article Date in Summary view (above title?)

## Desirable Features

- [ ] Error Checking
  - [ ] No Title in Post
  - [ ] Title not on the first line of Markdown file
- [ ] Watcher only updates the post that was updated (and summary)

- [ ] Auto-update (not dynamic on each page load)
- [ ] Logs (analytics) >> Google Analytics (for GitHub Pages)
- [ ] Valid RSS
- [ ] Deploy to cheap/free hosting/infrastructure
- [ ] No Database to Configure (*optional* persistance)
- [ ] A great default theme
- [ ] Easy to add your own theme
- [ ] No cruft editor
- [ ] Preview while you write (in-browser editor)
- [ ] Images sensibly wrapped
- [ ] Previous & Next post Links/Buttons
- [ ] Link Back to Homepage '/'

## Cool things for others to contribute

- [ ] Multi-user
- [ ] Commenting
- [ ] Comment Moderation
- [ ] View Stats
- [ ] Tags/Categories

[![I heart Validator](http://www.w3.org/QA/Tools/I_heart_validator_lg "W3C Validator Donation Program")](http://validator.w3.org/)

## How to use

1. Clone the repo

    > ```git clone https://github.com/dwyl/adoro.git```

2. Create a markdown file for your content inside the posts folder e.g. post.md

3. Run ```node build.js``` in the command line

4. Push your changes up to the gh-pages branch on your Github repo
git

5. Your updated blog will now be published
