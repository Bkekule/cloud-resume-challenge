# Frontend Technical Specification

Create a static website that serves an html resume.

## Resume Format Considerations

I live in the United States and resumes in word/pdf are supposed to exclude personal information that can be used to discriminate against you such as age, gender, marital status, etc.

For this purpose I will be using a [custom resume format](https://www.beamjobs.com/software-engineer-resume-builder?gclid=EAIaIQobChMInNXVqJKXkQMVEDLUAR0J6gidEAAYASAAEgLUTfD_BwE&gadid=773372297459&keyword=resume%20builder&gad_source=1&gad_campaignid=22996940283&gbraid=0AAAAAqMQP_DzrYl7OFFKmbZLHaw_bLkR3&gclid=EAIaIQobChMInNXVqJKXkQMVEDLUAR0J6gidEAAYASAAEgLUTfD_BwE).

### Reseme Format Generation

While I can read html, I am not very familiar with generation. I will be using Generative AI to do the heavy lifting for html and possible css generation, from which I will then manually refactor to fit my needs.

Prompt to Agent in Auto Mode:

```text
Generate the html for the attched image. Present it to me in a downloadable format.
```

Image provided to LLM:
![](./docs/sample_resume.png)

This is the [LLM generated output](./docs/nov-29-2025-auto_generated.html) which I will tweak.

This is what the rendered resume looks like unaltered.
![](./docs/rendered_unaltered_resume.png)

## HTML Adjustments

- Because we will be applying mobile styling to the website, we'll include the viewport meta tag so that mobile styling scales normally.
- Well extract our styles into separate stylesheet after we have arrived at a satisfactory level with the markup.
- We'll be using a soft tabs of two spaces for the html page.

## Serve the static Website Locally

This is usually accomplished by just opening the index.html file with a browser of our choice.

## Image Size consideration

For images intended to be used for page texturizing, we may need to to optimize to webp for acceptable sizes if the image sizes are too large (MB order)

## Frontend Framework Consideration

- Chose to use React because it is the most popular javascript framework
- Chose to use Vite.js over webpack because the frontend for this application is very simple
- Configured React Router V7 in declarative mode.
