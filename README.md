Git Commands – Cheat Sheet
Git Configuration
git config --global user.name "Your Name"
Set your Git username


git config --global user.email "you@example.com"
Set your Git email


git config --list
List all Git settings


Repository Management
git init
Initialize new repository


git clone <repo-url>
Clone a remote repository


Basic File Operations
git add <file>
Stage a file


git add .
Stage all changes


git status
Check current status


git diff
Show unstaged changes


git commit -m "msg"
Commit with message


Viewing History
git log
Show commit history


git log --oneline
Compact commit log


git show <commit>
Show specific commit


Branching and Merging
git branch
List branches


git branch <name>
Create branch


git checkout <name>
Switch branch


git checkout -b <name>
Create and switch


git merge <name>
Merge branch


git branch -d <name>
Delete branch


Remote Repositories
git remote -v
List remotes


git remote add origin <url>
Add remote


git push -u origin main
Push & set upstream


git push
Push changes


git pull
Pull changes


git fetch
Fetch without merge


Stashing
git stash
Stash changes


git stash list
List stashes


git stash apply
Apply last stash


git stash drop
Remove last stash


Tagging
git tag
List tags


git tag <name>
Create tag


git tag -a <name> -m "msg"
Annotated tag


git push origin <tag>
Push tag


Reset & Revert
git reset --soft <commit>
Keep staged


git reset --hard <commit>
Discard all changes


git revert <commit>
Undo with new commit


Cleanup
git clean -f
Remove untracked files


git gc
Optimize repo


Advanced
git rebase <branch>
Reapply commits


git cherry-pick <commit>
Apply specific commit


git blame <file>
Who modified each line


git reflog
Show ref history


