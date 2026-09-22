import * as Calculator from "../Calculator";
import * as Skill from "../game/Skill";
import m from "mithril";

export interface Attrs {
  calculator: Calculator.Calculator;
}

export const Skills: m.Component<Attrs> = {
  view({ attrs: { calculator } }) {
    const skills = Skill.byID.slice().sort((a, b) => a.name.localeCompare(b.name));

    return m('table',
      m('thead', m('tr',
        m('th', 'Name'),
        m('th', 'Level'),
        m('th', 'Description'),
        m('th', 'Effect'),
      )),
      m('tbody', calculator.filter.skillLevels.map((skillLevel, index) => m('tr',
        m('td', m('select', {
          onchange: (ev: Event) => {
            const selectedIndex = (ev.target as HTMLSelectElement).selectedIndex;
            const skill = skills[+selectedIndex];
            skillLevel.skill = skill;
            if (skillLevel.level > skill.maxLevel) skillLevel.level = skill.maxLevel;
            calculator.invalidateSkills();
          }
        }, skills.map(option => m('option', {
          selected: option === skillLevel.skill
        }, option.name))
        )),
        m('td', m('input[type=number]', {
          min: 1,
          max: skillLevel.skill.maxLevel,
          value: skillLevel.level,
          onchange: (ev: Event) => {
            calculator.filter.skillLevels[index].level = +(ev.target as HTMLInputElement).value;
          }
        })),
        m('td', skillLevel.skill.info),
        m('td', skillLevel.skill.toString(skillLevel.level)),
      )))
    );
  }
}
