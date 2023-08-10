    
    $$\      $$\                 $$\           $$\                              
    $$$\    $$$ |                $$ |          $$ |                             
    $$$$\  $$$$ | $$$$$$\   $$$$$$$ |$$\   $$\ $$ | $$$$$$\   $$$$$$\  $$$$$$\  
    $$\$$\$$ $$ |$$  __$$\ $$  __$$ |$$ |  $$ |$$ | \____$$\ $$  __$$\ \____$$\ 
    $$ \$$$  $$ |$$ /  $$ |$$ /  $$ |$$ |  $$ |$$ | $$$$$$$ |$$ |  \__|$$$$$$$ |
    $$ |\$  /$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |$$  __$$ |$$ |     $$  __$$ |
    $$ | \_/ $$ |\$$$$$$  |\$$$$$$$ |\$$$$$$  |$$ |\$$$$$$$ |$$ |     \$$$$$$$ |
    \__|     \__| \______/  \_______| \______/ \__| \_______|\__|      \_______|            

## Installation Requirements
- NodeJS https://nodejs.org/en/download/
- Git https://git-scm.com/downloads (optional)

Each installation can be checked by `npm --version` and `git --version`

## Developer Setup
- If Git is used, follow this guide for "Setting up Git" and "Authenticating with GitHub from Git" (either HTTPS/SSH):  https://docs.github.com/en/get-started/quickstart/set-up-git
- When setting up for development, you'll need to set up a GitHub account to connect your machine with any accessible repository. Doing so allows you to retrieve the latest updates to the project with one command (e.g., `git pull`).

## Chad Setup
Not needed 😎


## Add crap
- To check on stuff: git status (checks on commits/files added for saving), git branch (checks on version of the repository)
- git add . (add all files that were editted/deleted/made)
- git commit -m "message here" (replace message here with something useful to save all changes)
- git push (push to wherever the repository is held i.e. GitHub\)
    - git push -f origin (if it doesn't work)
### Live update
- npm run deploy (to package/bundle everything statically)
- Make CNAME file in gh-pages on GitHub (until I make a script/automation thing)
- GG