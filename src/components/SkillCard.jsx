import React from 'react'

export default function SkillCard({ skill }) {

  return (
    <div className="skill-card">
      <div className="skill-icon">{skill[1]}</div>
      <h3>{skill[0]}</h3>
      <span>{skill[2]}</span>
    </div>
  );
}