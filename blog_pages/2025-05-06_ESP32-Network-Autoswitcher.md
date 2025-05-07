# ESP32 Autoswitcher for Bad Campus WiFi
When looking for a networking related problem to solve for my internetworking unversity course,
I realized a major pain point for us specifically at our university-- the WiFi sucks.

The thing is, 
though, that there are three available wifi networks around campus, `eduroam`, `UMB-Guest`, 
and `Event-Guest`. They don't usually suck at the same time, but all of them periodically become 
very slow. This means that you, the user, have to take a break from whatever internet-dependent 
work you're doing for a second and manually switch to one of the other options.

## ESP32 to the rescue
ESP32s are pretty cheap and easy to use, and most importantly, they **have a network 
card** and can **talk to PCs via USB**. That means we can use the ESP32
as a second network card, totally dedicated to live-testing the WiFi throughput speed of 
available known networks!

![](../images/esp32-switcher.jpg)

## But first, why can't a laptop test all of the networks it's own?
This was not immediately obvious to me. Investigating solutions to this problem, I found [this Python script on Reddit](https://www.reddit.com/r/linux/comments/bbzm9t/automatically_switch_to_the_strongest_wifi_signal/)
that automatically switches to the available known network with the strongest WiFi signal, all in the background 
using [NetworkManager](https://wiki.archlinux.org/title/NetworkManager). 

Problem solved, right? Well, not exactly. It only switches based on [signal strength and physical data rate](https://www.netally.com/wifi-solutions/differences-between-wi-fi-throughput-bandwidth-and-data-rates/)--
not **WiFi throughput**[^1]. Especially given the fact that many, many people are connected to these campus 
networks at any given time, WiFi signal strength alone is probably not a good indicator of the upload and download 
speeds you'll get when you're actually on the network.

The constraint here is that to measure a network's **internet throughput**, you need to be actively connected to it,
and use something like [speedtest.net](https://www.speedtest.net/) to see how fast your end-to-end data transfer 
rates are. Since laptops only have one network card and network cards can only connect to one network 
at a time, you can't live test the internet speed of other networks without disconnecting from your current one.

## The solution
Here's where the ESP32 comes in! The laptop will send over the list of available known networks while running, 
and the ESP32 will keep a map of each available network and its current speed. It will keep switching between 
the available networks and re-testing them, updating the map until a new fastest is found-- at which point it 
will send a message and alert the host PC. The host PC will then switch to the new fastest network, all without 
the user doing anything manually.

![image of the diagram](../images/network-diagram.png)
*network diagram for this architecture, where "host device"=laptop and "external device"=esp32.*

## The implementation and testing
Once we had a clear plan for our solution, we spent a few hours hacking away at this thing until we eventually 
had a working version, which totalled in around 300 lines of C++/Arduino and Python. The main test case was to 
connect to one of my university WiFi networks and then turn on my hotspot, which is faster than any of the 
university networks, at least during the afternoon. Without fail, the esp32 would iterate through the available 
networks, see that my hotspot was the new fastest known network, tell the laptop to conenct to it, and it would 
connect automagically(tm).

Now, we have a prototype that will swap to the fastest available known WiFi based on the real live internet 
speed measurements :)

## Future ideas & contributing
Although we have a working prototype, there is still a laundry list of things that we could add to this device 
including:
- Support for Windows and Mac
- Support for [WPA Enterprise](https://www.tp-link.com/us/support/faq/500/) (right now we only support WPA personal)
- Adding support for multiple ESP32s in parallel in order to test multiple networks at once

If you're interested in trying it out or contributing, you can check out the project and give us a 
star [on GitHub](https://github.com/leiDnedyA/esp32-network-speed-monitor)!

[^1]: NetworkManager's `nmcli` provides [the following info](https://man.archlinux.org/man/nmcli-examples.7.en) about wifi networks
