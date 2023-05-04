echo "Loading alexrc."

alias gs="git status"

export PATH="./node_modules/.bin:$PATH"

function gmp {
  git checkout master
  git pull
}

function rcm {
  code ~/alexrc.sh
}

function reloadrc {
  source ~/alexrc.sh
}


# Opens the current repository's url on Github
function github {
    git remote -v |\
    grep origin |\
    grep push |\
    awk '{print $2}' |\
    sed 's/git@github.com://' |\
    sed 's/.git$//' |\
    xargs -I {} open "https://github.com/{}"
}

function fif {
  if [ -z "$1" ]; then 
    echo not adding anything
  else
    git add $@
  fi

  git commit --amend --no-edit
}

function gitilize {
  git init
  cat > .gitignore << EOF
.DS_Store
node_modules
EOF
  git add .
  git commit -m "Initial commit"
}

function clear_port {

  lsof -i :$1 | grep node | awk '{ print $2 }' | tail -1 | xargs kill -9
}
