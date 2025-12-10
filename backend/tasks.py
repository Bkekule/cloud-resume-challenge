import json
import markdown
from pathlib import Path

from invoke.tasks import task

project_folder: Path = Path(__file__).resolve().parent.parent

@task
def convert_markdown_to_html(
    c,
    input_file: Path = project_folder / "backend" / "projects.json", 
    output_file: Path = project_folder / "frontend" / "src" / "data" / "projectsData.json",
) -> None:
    with open(input_file, 'r') as f:
        data = json.load(f)
    
    for project in data:
        project['body_html'] = markdown.markdown(project.pop('body'))
    
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=2)
