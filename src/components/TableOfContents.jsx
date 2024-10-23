import { useEffect, useState } from 'react';

import classes from './TableOfContents.module.css';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    const formattedHeadings = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.innerText,
      level: heading.tagName.toLowerCase(),
    }));

    setHeadings(formattedHeadings);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length > 0) {
    return (
      <nav className={classes.aside}>
        <h4 className={classes.title}>Table of Contents</h4>
        <ul className={classes.list}>
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: heading.level === 'h3' ? '12px' : '0px' }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(heading.id);
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};
export default TableOfContents;
