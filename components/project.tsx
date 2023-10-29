import React from 'react';

import ProjectList from '../config/project.config';

const Project = () => {
    return (
        <div>
            {ProjectList.map((item) => (
                <ProjectItem item={item} key={item.title} />
            ))}
        </div>
    );
};

const ProjectItem = ({ item }: { item: ProjectItemProps }) => {
    return <div className='border ring-2'>{item.title}</div>;
};

export default Project;
