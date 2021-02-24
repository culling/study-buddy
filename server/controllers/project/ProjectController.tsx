class ProjectController {
    static find = (callback: any) => {
        const projects:any[] = [];
        callback(projects);
    }
}

export default ProjectController;