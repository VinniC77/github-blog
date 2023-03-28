import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/Header/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./style";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/VinniC77.png" />
      <ProfileDetails>
        <header>
          <h1>Vinicius Clunc</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          maxime sapiente aliquid possimus aliquam, quisquam error accusamus
          pariatur nihil ut.
        </p>
        <ul>
            <li>
                <FontAwesomeIcon icon={faGithub} />
                VinniC77
            </li>
            <li>
                <FontAwesomeIcon icon={faBuilding} />
                Valorizza
            </li>
            <li>
                <FontAwesomeIcon icon={faUserGroup} />
                123 seguidores
            </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
