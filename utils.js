function createProjectElement(id, project) {
    /* Create an element in Project
    tag: some tags
    title: title of the project or publications
    paper_url: link to the paper
    authors: authors
    conference: publication venue
    award (optional): award for the paper
    image (optional): directory to project image
    abstract (optional): abstract of the paper
    pdf (optional): link to the pdf of the paper
    code (optional): link to the code of the project
    video (optional): link to the video of the project
    bibtex (optional): bibtex entry for the paper
    others (optional): anything else
    */
    if (project.tag == null)
        project.tag = id;
    if (project.others == null)
        project.others = "";
    if (project.award == null)
        project.award = "";

    let buttons = "";
    let award = "";
    if (project.award) {
        award += `<div><span class="badge badge-sp">${project.award}</span></div>`;
    }
    if (project.abstract) {
        buttons += `<span class="badge badge-abstract" onclick="show('abstract-${id}')">Abstract</span>`;
    }
    if (project.pdf) {
        buttons += `<a href="${project.pdf}" target="_blank"><span class="badge badge-pdf">PDF</span></a> `;
    }
    if (project.code) {
        buttons += `<a href="${project.code}" target="_blank"><span class="badge badge-code">Code</span></a> `;
    }
    if (project.video) {
        buttons += `<a href="${project.video}" target="_blank" class="badge badge-video">Video</a> `;
    }
    if (project.bibtex) {
        buttons += `<span class="badge badge-bibtex" onclick="show('bibtex-${id}')">Bibtex</span>`;
    }



    html_img = `<img src='${project.image}' style="max-width: 160px"></div></div>`
    html_txt = `<p>
      ${award}
      <a href="${project.paper_url}"><papertitle>${project.title}</papertitle></a>
      <br>
      ${project.authors}
      <br>
      <em>${project.conference}</em>
      <br>
      ${buttons}
      ${project.others}
      <div id="abstract-${id}" style="display:none;" class="popup-abs">&nbsp;&nbsp; ${project.abstract || ""}<br></div>
      <div id="bibtex-${id}" style="display:none;" class="popup-bib">${project.bibtex || ""}</div>
      `

    document.getElementById(id + "-img").innerHTML = html_img;
    document.getElementById(id + "-txt").innerHTML = html_txt;
}

function show(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
