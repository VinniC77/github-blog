import { ExternalLink } from "../../../../components/Header/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./style";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/VinniC77.png" />
            <ProfileDetails>
                <header>
                    <h1>Vinicius Clunc</h1>
                    <ExternalLink text="Github" href="#" />
                </header>
            </ProfileDetails>
        </ProfileContainer>
    )
}