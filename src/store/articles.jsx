import { createContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData, fetchTools } from '../utils/http';

const initialState = {
  all: [],
  company: [],
  toolGuides: [],
  howto: [],
  organisation: [],
  projects: [],
  internalTools: [],
};

export const ArticlesContext = createContext({
  ...initialState,
});

export default function ArticlesContextProvider({ children }) {
  const [state, setState] = useState(initialState);
  let token = localStorage.getItem('token');

  const { data: internalTools } = useQuery({
    queryKey: ['articles', 'internalTools'],
    queryFn: () => fetchTools(),
    enabled: !!token,
  });
  const { data: companyData } = useQuery({
    queryKey: ['articles', 'company'],
    queryFn: () => fetchData('company'),
    enabled: !!token,
  });
  const { data: toolsData } = useQuery({
    queryKey: ['articles', 'tools'],
    queryFn: () => fetchData('tools'),
    enabled: !!token,
  });
  const { data: howtoData } = useQuery({
    queryKey: ['articles', 'howto'],
    queryFn: () => fetchData('howto'),
    enabled: !!token,
  });
  const { data: organisationData } = useQuery({
    queryKey: ['articles', 'organisation'],
    queryFn: () => fetchData('organisation'),
    enabled: !!token,
  });
  const { data: projectsData } = useQuery({
    queryKey: ['articles', 'projects'],
    queryFn: () => fetchData('projects'),
    enabled: !!token,
  });

  useEffect(() => {
    if (companyData && toolsData && howtoData && organisationData && internalTools.tools_settings) {
      const filteredCompany = companyData.filter(
        (item) => !item.content.rendered.includes('Sorry, but you do not have permission to view this content.'),
      );

      const filteredTools = toolsData.filter(
        (item) => !item.content.rendered.includes('Sorry, but you do not have permission to view this content.'),
      );

      const filteredHowto = howtoData.filter(
        (item) => !item.content.rendered.includes('Sorry, but you do not have permission to view this content.'),
      );

      const filteredOrganisation = organisationData.filter(
        (item) => !item.content.rendered.includes('Sorry, but you do not have permission to view this content.'),
      );

      const filteredProjects = projectsData.filter(
        (item) => !item.content.rendered.includes('Sorry, but you do not have permission to view this content.'),
      );

      setState({
        company: filteredCompany,
        toolGuides: filteredTools,
        howto: filteredHowto,
        organisation: filteredOrganisation,
        projects: filteredProjects,
        internalTools: internalTools.tools_settings,
        all: [
          ...filteredCompany,
          ...filteredTools,
          ...filteredHowto,
          ...filteredOrganisation,
          ...filteredProjects,
          internalTools.tools_settings,
        ],
      });
    }
  }, [companyData, toolsData, howtoData, organisationData, projectsData, internalTools]);

  return <ArticlesContext.Provider value={state}>{children}</ArticlesContext.Provider>;
}
