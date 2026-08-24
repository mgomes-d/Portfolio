Front-end:

react + typescript + tailwind CSS + shadcn/ui

The final goal is to build something complex, but first i want to start with the most basics stuff, after the most basic stuff, it need's to have an simple way to add content being very modular.

Because there is a lot of project in 42, if i want to show them, i need's to make sure that follow certains rules, like:
- being able to test it if it's an testable program(turing, ality, others projects that if i want to build i am able to show it in the future)
- Does not break other part of the site if stop working
- Never breaks the server in case of error
- Runs in isolation, making easy to restart it or to stop it

I also want to make easy to navigate between the projects.

Let's make single page application, but that is possible to navigate between the pages.


Structure:
1 Color & typography
Color:
We need to do the rule of 60 / 30 / 10

Role,Color,Hex,Usage
Primary,Golden, #ffb405,"Buttons, links, highlights, accents"
Secondary,Coral/Red, #c2554f,"Secondary buttons, hover states, tags"
Background,Dark, #1c1917,Main background
Surface,Slightly lighter dark, #292524,"Cards, navbar, sections"
Text,Off-white, #fafaf9,Main text
Muted text,Gray, #a8a29e,"Descriptions, secondary text"

Change if it's not good, we need to start with something

Typo: let's go by default
```csv
Element,Font,Weight,Size (desktop),Notes
Headings,Inter,Bold (700),H1: 3.5-4.5remH2: 2.25remH3: 1.5rem,Strong hierarchy
Body text,Inter,Regular (400),1rem - 1.125rem,Excellent readability
Small / Muted,Inter,Regular,0.875rem,"Descriptions, labels"
Buttons & Nav,Inter,Medium (500),0.875-1rem,Clean and sharp
```

