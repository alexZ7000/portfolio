import { library as globalLibrary } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
    faArrowRight,
    faArrowUpRightFromSquare,
    faBars,
    faBriefcase,
    faChevronUp,
    faDatabase,
    faDragon,
    faFire,
    faGraduationCap,
    faLeaf,
    faRotateRight,
    faScroll,
    faShieldHalved,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faAndroid,
    faAngular,
    faAws,
    faDocker,
    faFlutter,
    faGitAlt,
    faGithub,
    faGoogle,
    faJava,
    faLinkedinIn,
    faNodeJs,
    faPython,
    faReact,
    faSass,
    faUnity,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const icons = [
    faArrowRight,
    faArrowUpRightFromSquare,
    faBars,
    faBriefcase,
    faChevronUp,
    faDatabase,
    faDragon,
    faFire,
    faGraduationCap,
    faLeaf,
    faRotateRight,
    faScroll,
    faShieldHalved,
    faXmark,
    faEnvelope,
    faAndroid,
    faAngular,
    faAws,
    faDocker,
    faFlutter,
    faGitAlt,
    faGithub,
    faGoogle,
    faJava,
    faLinkedinIn,
    faNodeJs,
    faPython,
    faReact,
    faSass,
    faUnity,
    faWhatsapp,
];

export function registerIcons(library?: FaIconLibrary): void {
    if (library) library.addIcons(...icons);
    globalLibrary.add(...icons);
}
