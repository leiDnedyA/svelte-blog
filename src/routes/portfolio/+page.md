# Portfolio

Here are some of the projects that I've built! For more examples, feel free to check out my [Github account](https://github.com/leiDnedyA/).

## [ESP32 Network Switcher](https://aydendiel.dev/posts/2025-05-06_ESP32-Network-Autoswitcher) | [Source Code](https://github.com/leiDnedyA/esp32-network-speed-monitor)
<span class="tag">C++</span> <span class="tag">Python</span> <span class="tag">Embedded Systems</span> <span class="tag">Linux</span>

Some friends and I built this project for our internetworking class at UMass Boston. We set out to solve the problem of slow campus WiFi! 
We used an ESP32 to scan WiFi speeds of available networks in the background, and tell the laptop which network to connect to for the best internet 
connection.
I wrote and shared a blog post about it [here](https://aydendiel.dev/posts/2025-05-06_ESP32-Network-Autoswitcher), where you can read all about the technical details.

![](images/network-diagram.png)


## [DailyKanji.xyz](https://www.dailykanji.xyz/) | [Source Code](https://github.com/leiDnedyA/japanese-wotd-nextjs/)
<span class="tag">React</span> <span class="tag">TypeScript</span> <span class="tag">Next JS</span> <span class="tag">Supabase</span> <span class="tag">Python</span>

For me, **DailyKanji** has been an interesting experiment in shipping an app to solve a real-world problem, marketing it, and iterating on it. It started off 
from a pattern that I noticed when studying Japanese. I would spend around 2 weeks practicing daily, usually pushing myself to study 30 minutes to an hour a day.
Eventually, though, I would always end up getting too busy to keep up, and eventually letting it fall by the wayside.

DailyKanji helps users maintain consistency, even if it's just a small daily commitment. Users can build a daily streak of learning, with new words 
fed to them daily. DailyKanji also implements a spaced-repetition system, based off of the [Anki Supermemo 2 algorithm](https://help.remnote.com/en/articles/6026144-the-anki-sm-2-spaced-repetition-algorithm).

![dailykanij screenshot](portfolio/dailykanji.png)

## QRPigeon | [Source Code](https://github.com/leiDnedyA/qr-image-drop/)
<span class="tag">Python</span> <span class="tag">Flask</span> <span class="tag">JavaScript</span> <span class="tag">Linux</span> <span class="tag">GitHub Actions</span> <span class="tag">Azure</span>

**QRPigeon** is a tool for **transferring files** quickly from a mobile device to a PC as fast as possible. Here are the steps for using it:

1. Pull up the website on a desktop device
2. Scan the QR code on your desktop screen with a mobile device
3. On your mobile device, select the images or PDFs that you'd like to send to your desktop
4. Look back at your desktop, and see the file from your mobile device appear automagically™
5. Click the "Download" button on any item on the desktop, and you're done!

![QRPigeon screenshot](portfolio/qrpigeon.png)

## C File Explorer | [Source Code](https://github.com/leiDnedyA/c-file-explorer)
<span class="tag">C</span> <span class="tag">Linux</span> <span class="tag">Bash</span>

**C File Explorer** is a terminal-based file explorer, built with the goal of speeding up navigation in the Linux terminal. This was a great excuse to get better at **C** and the **Linux terminal**!

<video class="bordered" width="100%" autoplay loop muted playsinline>
    <source src="portfolio/c-file-explorer.webm" type="video/webm">
</video>

## Thrift Router | [Source Code](https://github.com/leiDnedyA/thrift-router)
<span class="tag">TypeScript</span> <span class="tag">JavaScript</span> <span class="tag">React</span> <span class="tag">Express.js</span> <span class="tag">Leaflet.js</span>

Based on your current location, **Thrift Router** will find the fastest route to all of the **thrift stores** in your area, and allow you to open the route in **Google Maps** or **Apple Maps**!

![Thrift Router demo](portfolio/thrift-router.gif)
