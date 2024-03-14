import { ProjectType } from '@/types/project';

import axios from 'axios';

export const getProjects = async (): Promise<ProjectType[]> => {
    const unSortedProjects = await axios.get(`https://api-notion.harisfox.com/v1/table/b0cbcf0439f146339e84fcddf522e329?_timestamp=${new Date().valueOf()}`).then((response) => response.data);

    return unSortedProjects.sort(function (a: ProjectType, b: ProjectType) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
};
