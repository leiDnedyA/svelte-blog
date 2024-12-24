# Practical Guide to Switching to Linux

![](../images/tmux_nvim.gif)

This blog post is dedicated to **junior developers on Windows or Mac** who are curious about **switching to Linux** for software development! Please note that I am *not an expert* on Linux. There are pleanty of things that I don't know about the OS, and am constantly learning. The goal of this post is to share my unique perspective, as well as some tricks I've picked up along the way. This article covers the following:
1. What are the **benefits** of developing on Linux?
2. What are the **drawbacks**?
3. Tips and tricks!
4. *(bonus)* Recommended software

Switching to Linux has brought a lot of joy to my programming experience, and I wish you the same!

## Benefits of Using Linux
I'll cut to the chase, here are my top 5 favorite things about making the switch:
1. **No forced Windows updates** 🎉! This used to <span style="color:red">boil my blood</span>, and still does when I see it happen to other people. On Ubuntu, which I reccomend for beginners, updates never trigger on boot. When an update is ready, you will be gently asked whether you want to update now or later, but that is it.
2. **Installing stuff is super easy**, especially programming stuff. Also, you can do it *however you want*. Use whatever package manager you want, or no package manager at all (my preference). *More on this later.*
3. **The free open source software available for Linux is awesome**, especially for programmers! My personal favorites are things like [Neovim](https://neovim.io/) and [Tmux](https://www.redhat.com/en/blog/introduction-tmux-linux), but there are countless other tools that make programming super fun on Linux.
4. **Easy scripting**: I personally love how scriptable Linux is. You can technically write scripts on Windows too, but it's a pain in the ass. A lot of things simply can't be done through the command line, or are super complicated. On Linux, scripting is a lot simpler since you can basically do anything you want from the terminal. [Want to create a new github repo from the terminal](https://gist.github.com/leiDnedyA/4d7f6021c66de40ae4b4a8cc131059cb)? Here you go! It even lets you specify whether you want it private or public with a command-line flag. [Want to update Discord from the terminal](https://gist.github.com/leiDnedyA/9621445703d84a39f811228e6fb48de5)? Done in 20 lines of bash.
5. **At some point, you will probably have to use Linux anyway. Using it as your daily driver will make you really good at it.** For me, this was made really apparent when it came to deploying web apps to AWS. Having some basic experience with Linux as my daily driver made it a lot easier to get started, and on top of that, deploying to Ubuntu on AWS actually *taught me more skills* that I then brought over to my local setup.

Overall, these are the biggest benefits that I've seen. Maybe the only thing I missed is that it makes it really easy to [run a Minecraft LAN server](https://phoenixnap.com/kb/minecraft-dedicated-server). Windows could never.

## Drawbacks (yes, there are a few)
Don't get me wrong, I really like Linux. I really really like Linux. I hope you don't let these push you from trying it out, but these are a few things that I think you should be aware of when making the switch.
1. **You will break stuff. A lot.** Twice in the first year of using Linux, I had to re-flash Ubuntu to my laptop because I did something that I couldn't Google my way out of. One time I broke my package manager and couldn't fix it. Another time I uninstalled Ubuntu desktop by accident. As much of a PIA as it was to fix, each time I broke something, I learned from it. Whether it's been to not screw with my `sources.list` file, to be careful uninstalling packages with `lib` in the name, or to avoid using `snap` for certain packages, I've since learned to not break stuff as much.
2. **Some software will not be available to you.** Especially games. Luckily, I don't really play video games so I don't care about that, but for me the biggest issue has been Microsoft Excel. Excel, and all other office suite apps, don't get released for Linux. Luckily, though, LibreOffice exists, and is good enough for most use cases[*](https://www.reddit.com/r/libreoffice/comments/1fvhcrd/the_problems_i_have_with_libreoffice/). Even more luckily, we live in the future where most apps are available on the web anyway, meaning now is a great time to be a Linux user.
3. **You will probably miss Windows for a while.** This is totally natural because you've probably been using it since you were a little kid. Trust me, though, you just have to stick it out for a few months and you will never look back.
4. **If you get a job at an enterprise company, they might not let you use Linux.** This one was the worst for me by far. I got an internship at Fidelity, and it's all Windows. I asked about using WSL, and my manager recommended against it, so I accepted my fate and just coded in Windows for a few months. [There are ways to cope](https://git-scm.com/downloads), and I actually really liked working at Fidelity (which goes to show that the OS you use doesn't actually matter that much haha), but it was a real bummer having to stray from my home turf like this.

## Tips and Tricks & Recommended Reading!
Now for my favorite part, sharing all of the random life hacks to increase your efficiency, prevent disaster, and generally have more fun on Linux.
1. [**Putting `,` before all of your scripts**](https://rhodesmill.org/brandon/2009/commands-with-comma/). Read this article now and you will thank me later. This blew my mind when I tried it out, and I am eternally grateful to this author!
2. **If possible, install programs directly from binaries.** There are some programs out there that [really want you to fuck with your package manager to install them](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#ubuntu). Maybe there's a good reason for this, but it's a pet peeve of mine. If at all possible, try to install new programs without using your package manager. Follow these steps to do so:
    1. *(You only have to do this the first time)* Make a `~/bin` directory to keep executables in (run `mkdir ~/bin` to do this). Then, add the following line to your `~/.bashrc` file (do this with `nano ~/.bashrc`, or `vim ~/.bashrc` if you're adventurous):
        ```bash
        # ~/.bashrc
        export PATH="$PATH:$HOME/bin" # put this at the end of the file
        ```
        This makes it so that any executable file in the `~/bin` directory can be run in the terminal by simply typing the filename, regardless of the current working directory.
    2. Download the Linux executable (and any supporting files) for the program you'd like to install. This might come as a `.zip` / `.tar.gz` file, and if so, unzip it and store it somewhere. Otherwise, you might get lucky and be given a standalone executable, which makes the process a lot simpler.
    3. Locate the **executable file** that came with the installation. If you got a standalone executable, type `chmod +x <path to file>` which is required to actually execute it. If it's not standalone, the executable will be inside of a folder with other files required by the program. When looking for the executable file in the program's folder, you can check if it's thr right file by typing `./name_of_the_file`. If this causes the program to run, you're looking at the right file.
    3. [Create a **symbolic link**](https://stackoverflow.com/questions/1951742/how-can-i-symlink-a-file-in-linux) to the executable in `~/bin`, or just **move the executable there**. If the program comes as a standalone executable, then feel free to just `mv <path to executable> ~/bin`. Otherwise, you'll need to create a **symlink**, which you can do with the following commands:
        ```bash
        cd ~/bin # if you haven't already
        ln -s /path/to/executable name_of_program
        ```
        If all goes well you'll be able to simply type whatever value you chose for `name_of_program` into the terminal, and the program will run! I know that this might seem complicated the first time, but once you've done it a few times it becomes extremely straightfoward.
3. **Get good at using the core utils!** [This forum post includes a great guide.](https://www.linux.org/threads/gnu-coreutils-cheat-sheet.29989/) Mastering Linux utils will not only make you more efficient in the terminal, but it will make you great at writing bash scripts, and generally make programming more fun :)

## Bonus: Software I Reccomend
Like all Linux users, I'm very opinionated, so the final thing I'll leave you with is a list of tools that I use with Linux that I think are really awesome. Feel free to ignore any of these, but if I were you, I'd give them a shot:
1. **Ubuntu**: I don't know if this really counts since it's a distro, but I love Ubuntu. Ubuntu gets a lot of undeserved hate from other Linux users because it's user friendly. I've been using it for 2 years, and I've never felt limited by it in any way.
1. [**Tmux**](https://hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/): This is available on many Linux distros out of the box, and will make you really fast when using the terminal. It took me a while to decide to learn it, but I really wish I started sooner
2. [**Neovim**](https://neovim.io/) (with [LazyVim](https://www.lazyvim.org/)): This IDE / text editor has really revolutionized the way that I code. If you're a VSCode user currently, I recommend you start by using the [VSCodeVim](https://github.com/VSCodeVim/Vim) plugin to test the waters before fully switching to Neovim because it will be really difficult at first. Once you get the hang of it, though, I think you'll really like it. For a quick cash course, check out [this fantastic video about using Vim](https://www.youtube.com/watch?v=X6AR2RMB5tE)!

I hope this helped! If you have any questions about Linux or my experience with it, please reach out to me on X/Twitter at [@aydendiel](https://x.com/aydendiel), or email me at [aydendiel@gmail.com](mailto:aydendiel@gmail.com).

Peace out

![](../images/cat-tongue-out.jpg)
