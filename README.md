# Code Challenge: ArtistWorks

> [!NOTE]
> Previous to this exercise, I had exactly zero (0) knowledge or experience with Vue/Nuxt. I watched a 3-hour Vue crash course on YouTube, drawing on my React experience to understand it, then I spent a day reimplementing parts of my current React side project in Vue/Nuxt3 to get a feel for it. Also, I had a lot of trouble getting TailwindCSS to play well with my Nuxt3 environment, so I abandoned that entirely and decided to hand-write all of the CSS.

## Implmentation

I implemented a "working" log in screen. Enter `demo` for the username and password to "log in." The form does respond to pressing the Enter key to submit, as well as clicking the Continue button. The Google and Apple buttons are actual buttons, but they don't do anything.

The UI is pretty near pixel-perfect.

## Accessibility

I tried to implement the UI keeping in mind accessibility best practices: buttons, images with `alt` text, links, semantic HTML, etc.

## Responsiveness

Log in screen is fully responsive. I ran out of time to make the Lesson Overview responsive.

## Testing

Previous to this excercise, I had exactly zero (0) experience with testing frameworks (at Callaway we had a dedicated team that wrote automated test cases). I had written unit tests before, but in custom testing frameworks. Here, I included vitest for a component unit test and playwright for an integration test.

## Makefile

Running `make dev` and `make test` will run the respective scripts.

## Docker

I ran out of time to mess with a Docker container. I have previous experience with deploying Docker containers, but not creating them.

## Code Quality

I feel like this project is pretty good, considering I have no prior experience with Vue/Nuxt. I pulled something together in a farily short timeframe, leaning on my previous experience in React.

## Improvements With More Time

- I would definitely finish out the Lesson Overview header and make Lesson Overview fully responsive.
- I would write some more test cases.
- I would research more on docker-compose and Dockerfile.
- I would deploy this project on Vercel from my GitHub repository.
- On the Lesson Overview screen, I would have make the dropdown functional, although it is an actual button right now.
