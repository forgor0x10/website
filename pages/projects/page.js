export default async function page() {
  const projects_list = [
    {
      name: "fnboard",
      type: "secondary",
    },
    {
      name: "stupidNet",
      type: "secondary",
    },
    {
      name: "peaklang",
      type: "secondary",
    },
    {
      name: "scrrain",
      type: "secondary",
    },
  ];

  const response = await fetch("https://api.github.com/users/forgor0x10/repos");
  const project_repos = await response.json();

  let main_projects = "";
  let secondary_projects = "";

  for (const project of project_repos) {
    const project_data = projects_list.find((p) => p.name == project.name);

    if (!project_data) {
      continue;
    }

    const project_html = /*html*/ `
      <div>
        <h3><a class="basic underline" target="_blank" href="${
          project.html_url
        }">${project.name}</a></h3>
        <p>${project.description || ""}</p>
      </div>
    `;

    if (project_data.type == "main") {
      main_projects += project_html;
    } else if (project_data.type == "secondary") {
      secondary_projects += project_html;
    }
  }

  return {
    main_projects,
    secondary_projects,
  };
}
