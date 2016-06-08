---
layout: post
title: Top 5 Tips for Passing an Accessibility Audit
page-name: Blog Post - Accessibility
day: 16
month: Aug
year: 2014
tags: accessibility community
quote: The issue in Web accessibility is the fact that blind and visually-impaired people need the single biggest boost to achieve equivalence, since the real-world Web is a visual medium.
quote-author: Joe Clark
description: My experience on training up in accessibility and working with Vision Australia to pass an audit.
---

# Background

In the last few years there has been a big push towards accessibility. As technology grows and increases in complexity the challenges of keeping a website or application accessible for people with disabilities to use increases. The government has stepped in, pledging to ensure that all of their websites, internal and external, will be fully accessible to anyone using them.

Coming into web development from a background in educational psychology this made perfect sense to me and fit in well with my philosophy of inclusion. The need to be able to access information or communicate online is especially important for people with disabilities who may not be able to do so without assistance otherwise.

In the middle of 2014 I worked with Vision Australia on making one of our web applications, WebVal, accessible to people with disabilities to WCAG AA standard. WebVal is a custom application use by a government department to upload, validate and collaborate on data.

It was quite challenging, however I worked closely with Vision Australia, started going to Accessibility Technology Meet Up's in Melbourne and completed a course through the University of South Australia in an endeavour to learn as much as possible. I have since started passing on my knowledge in speaking at companies, groups and conferences such as realestate.com, SitePoint, PageUp, Ruby Australia, Be Responsive, CSS Conference and WebDirections CODE conference.

# Tips for checking Accessibility

## 1. Put away the mouse, can you still do everything?

Some people have permanent or temporary motor impairments that prevent them from using a mouse comfortably so they rely on the keyboard for navigation. People with visual impairments may also use a combination of keyboard and screen reader to navigate the page. Make sure that everything you can do with a mouse you can also do with the keyboard.
For example we had some tooltips that were only triggered as the mouse hovered over them. They are now modals that are set up as links so you can tab to them and activate them with the keyboard.
We also had a lot of styling that was on hover but not on focus. So while it was easy to tell something was triggerable by mouse, such as a navigation drop down, you didn't get that feedback with the keyboard. So all hover styling is now duplicated for on keyboard focus as well.

## 2. Find the oldest smart phone and worst place for wifi, does everything still work?

You cannot control what device or browser someone will use to access your site. It is important that everyone can use it, not just people with high end equipment using your up to date browser of choice.
Our application was originally not responsive so nearly impossible to use with a phone. By adding in responsive styling, the main difficulty being collapsing all of the data tables, I was able to make it usable independent of device.
Another thing to keep in mind with designing for mobiles is touch area. People with motor difficulties may have trouble with small touch areas for links and navigation.

## 3. Zoom in a lot, is the layout still in one piece?

Some people will have difficulty reading from a screen and will choose to zoom in in order to see the text better. Make sure this doesn't break the layout completely and that the text does increase on zoom. Using relative size units helps with this, for example em and % over px. As well as having the font at a good size in the first place, 16px or higher is recommended.
One of our diagrams I updated to an interactive svg with the d3 library in order to be better accessed by keyboard and screen reader. It worked well until you zoomed in and it became tinier and tinier. I updated and tested the view port until it worked as expected and increased in size on zoom instead.

## 4. Take a good look at the colours you are using, do any combinations make it hard to read?

People with visual impairments may find certain colour contrast or colour combinations if they are colourblind (8% of men are red green colourblind) difficult to read. If you are not sure run the colours through a colour contrast checker such as <link here> and double check how it looks. You may have to adjust the shade slightly to make it easier to read.
We used Twitter Bootstrap as a base for our styling, unfortunately some of their default colour combinations didn't have a high enough contrast ratio. <link to article>. In particular their alert colours, which I went through and overrode with slightly different shades. It looks about the same except easier to read.
Some people override their colours as well, making the background black and text colour white to increase the contrast on their browser. Testing this is really good as well to make sure nothing disappears with these settings. Firefox is a common one for this and we found that text on buttons and other inputs would disappear with this setting on. I found that by removing the background colour of white for inputs, so no visual change normally, would fix this problem.

## 5. Lastly, time to grab your headphones and turn off your screen

300,000 people in Australia are blind and use a screen reader to navigate their computer and access the internet. This is the trickiest thing to test and get right as it's the biggest learning curve.
If time and budget are a factor I recommend testing with NVDA <link>. This is a free screen reader developed by Firefox for a Windows environment. It's the second most popular and is very similar to JAWS for Windows which is the most popular however is quite expensive to buy.
Most things should translate fine to screen readers as long as you follow web best practice and have valid HTML. However if you have any content dynamically being added to the screen or anything that doesn't work in a standard way you may need to add in some screen reader specific code.
For example as our new keyboard accessible modals were being added it meant that I was using links in a non-standard way, to open a modal dialogue instead of going to a new page. So I added hidden text for screen readers only to let them know it was happening and to give extra structure to the modal to match the equivalent visual cues that I was adding.
