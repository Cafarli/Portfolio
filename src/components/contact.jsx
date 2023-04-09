import "./contact.scss";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Find on me</h1>
      <div className="ways">
        <ul>
          <ol>
            <span>
              <a
                href="mailto: turkanaceferli@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Email />
              </a>
            </span>
          </ol>
          <ol>
            <span>
              <a
                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B7LDfGHIHRpmg0lKwpTsWTg%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
            </span>
          </ol>
          <ol>
            <span>
              <a
                href="https://github.com/Cafarli"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </span>
          </ol>
        </ul>
      </div>
    </div>
  );
}
