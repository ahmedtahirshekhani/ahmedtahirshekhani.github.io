const ProjectSection = () => {
  return (
    <div>
      <div>
        <div className="md:grid md:grid-cols-3 gap-4 mx-2">
          <div className="col-span-2">
            <div className="text-2xl font-bold">
              UWaterloo - Folder Management DnD | React JS, PHP, SQL
            </div>
          </div>
          <div>
            <div className="text-0.5xl md:text-2xl font-medium">Oct 2021 - Jan 2022</div>
          </div>
        </div>

        <ul className="list-disc my-3 text-jusify mx-2">
          <li>
            Developed Folder Management System with CRUD Features, with Drag and
            Drop
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectSection;
