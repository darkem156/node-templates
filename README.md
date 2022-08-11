# Hi!
This is a little project to create NodeJS Projects from a Template

## What i need?
You just need to install SubVersion. We will use a command to clone the repository that use Git SVN.
On a Debian based distro, you can use:
~~~
sudo apt-get install git-svn
~~~

## How to use it?
1. First, you need to paste the following code on your Shellrc file (for example .bashrc or .zshrc).
~~~
function cnp()
{
  if [[ $1 == "" ]]; then
    echo "Select a Template to Create Your Project"
    return
  fi

  repo="https://github.com/darkem156/node-templates/trunk/"$1
  
  git svn clone https://github.com/darkem156/node-templates/trunk/$1

  if [[ $2 == "-d" ]]; then
    if [[ $3 != "" ]]; then
      echo "$3"
      mv $1 $3
      return
    else
        echo "Select a Dir Name"
        return
    fi
  fi
  mv -v $1/* .
  rm -rf $1
  return
}
~~~

2. Now, you can run the following command on the direcotory where you want to creaate your project, for example, a vue project:
~~~
cnp vue
~~~
* if you want to create the project on a specific directory, use the param "-d"
~~~
cnp vue -d My-Vue-Project
