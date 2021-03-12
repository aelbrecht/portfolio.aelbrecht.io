import React, {FC} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faStar} from "@fortawesome/free-solid-svg-icons";
import {faCircle as faCircleHollow} from "@fortawesome/free-regular-svg-icons";

type BadgeType = [string, number]

const activeSkills: BadgeType[] = [
    ["Go", 4],
    ["Python", 4],
    ["TypeScript", 4],
    ["React", 4],
    ["JavaScript", 3],
    ["CSS/SCSS", 3],
    ["Node.js", 3],
    ["HTML", 3],
    ["Docker", 2],
    ["MongoDB", 2],
    ["PostgreSQL", 2],
    ["G Analytics", 2],
    ["Shell Scripting", 1],
    ["S3", 1],
]

const passiveSkills: BadgeType[] = [
    ["JetBrains", 3],
    ["Unix", 3],
    ["Final Cut Pro", 2],
    ["Creative Cloud", 2],
    ["Unit Testing", 2],
    ["Cloudflare", 2],
    ["Digital Ocean", 2],
    ["Office", 2],
    ["Sentry.io", 2],
    ["GCP", 1],
    ["Fusion 360", 1],
]

const pastSkills: BadgeType[] = [
    ["C", 2],
    ["Java", 2],
    ["Arduino", 2],
    ["C++", 1],
    ["Assembly", 1]
]

const otherSkills: BadgeType[] = [
    ["MySQL", 2],
    ["PHP", 2],
    ["jQuery", 2],
]

const skillBadges = (badges: BadgeType[]) => {
    const results = badges.map((b) => (
        <div className="single-skill">
            <span style={{paddingRight: "0.25rem"}}>{b[0]}</span>{skillBadgeIcon(b[1])}
        </div>
    ))
    return (
        <div className="skill-badges">
            {results}
        </div>
    )
}

const skillBadgeIcon = (level: number) => {
    const rings = []
    if (level === 4) {
        return (
            <FontAwesomeIcon className={"skill-star"} icon={faStar}/>
        )
    } else {
        for (let i = 0; i < level; i++) {
            rings.push(
                <FontAwesomeIcon className={`skill-level skill-level-${level}`} icon={faCircle}/>
            )
        }
        for (let i = 0; i < 3 - level; i++) {
            rings.push(
                <FontAwesomeIcon className={`skill-level skill-level-${level}`} icon={faCircleHollow}/>
            )
        }
    }
    return rings
}

const SkillList: FC = () => (
    <div className="flex-columns" id="skills">
        <div className="flex-full-column flex-full-column-70 p2">
            <div className="w100">
                <h2>Skills</h2>
                <div className="skill-badges">
                    <div className="single-skill">
                                <span style={{paddingRight: "0.25rem"}}>
                                    Most Used
                                </span>
                        {skillBadgeIcon(4)}
                    </div>
                    <div className="single-skill">
                                <span style={{paddingRight: "0.25rem"}}>
                                    Advanced
                                </span>
                        {skillBadgeIcon(3)}
                    </div>
                    <div className="single-skill">
                                <span style={{paddingRight: "0.25rem"}}>
                                    Intermediate
                                </span>
                        {skillBadgeIcon(2)}
                    </div>
                    <div className="single-skill">
                                <span style={{paddingRight: "0.25rem"}}>
                                    Novice
                                </span>
                        {skillBadgeIcon(1)}
                    </div>
                </div>
                <h3 className="mb-0">Current Skills</h3>
                <div className="text-lead">
                    Used in the past year.
                </div>
                {skillBadges(activeSkills)}
                <h3 className="mb-0">Passive Skills</h3>
                <div className="text-lead">
                    Actively used programs or environments.
                </div>
                {skillBadges(passiveSkills)}
                <h3 className="mb-0">Past Skills</h3>
                <div className="text-lead">
                    Used for a project at some point.
                </div>
                {skillBadges(pastSkills)}
                <h3 className="mb-0">Other skill</h3>
                <div className="text-lead">
                    Used for project in the past but moved on from.
                </div>
                {skillBadges(otherSkills)}
            </div>
        </div>
    </div>
)

export default SkillList