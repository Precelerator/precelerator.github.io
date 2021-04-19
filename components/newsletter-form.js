export default function NewsletterForm() {
  return (
    <>
      <div id="mc_embed_signup">
        <form
          action="https://sce.us7.list-manage.com/subscribe/post?u=d1a3af7000e32c2f97a63e317&amp;id=163270c9bb"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required">
              <span className="asterisk">*</span> Pflichtfeld
            </div>
            <div className="mc-field-group">
              <label for="mce-EMAIL">
                Email <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group">
              <label for="mce-LNAME">
                Nachname <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="LNAME"
                className="required"
                id="mce-LNAME"
              />
            </div>
            <div className="mc-field-group">
              <label for="mce-FNAME">
                Vorname <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="FNAME"
                className="required"
                id="mce-FNAME"
              />
            </div>
            <div className="mc-field-group input-group">
              <strong>Unsere Newsletter </strong>
              <ul className="newsletterList">
                <li>
                  <input
                    type="checkbox"
                    value="1"
                    name="group[7137][1]"
                    id="mce-group[7137]-7137-0"
                  />
                  <label for="mce-group[7137]-7137-0">SCE Newsletter</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="2"
                    name="group[7137][2]"
                    id="mce-group[7137]-7137-1"
                  />
                  <label for="mce-group[7137]-7137-1">
                    Veranstaltungen Lehre und Qualifizierung
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="4"
                    name="group[7137][4]"
                    id="mce-group[7137]-7137-2"
                  />
                  <label for="mce-group[7137]-7137-2">
                    Veranstaltungen Gründungsförderung (Innovations-Café)
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="8"
                    name="group[7137][8]"
                    id="mce-group[7137]-7137-3"
                  />
                  <label for="mce-group[7137]-7137-3">Presse Newsletter</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="16"
                    name="group[7137][16]"
                    id="mce-group[7137]-7137-4"
                  />
                  <label for="mce-group[7137]-7137-4">
                    Veranstaltungen Forschung
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="32"
                    name="group[7137][32]"
                    id="mce-group[7137]-7137-5"
                  />
                  <label for="mce-group[7137]-7137-5">
                    Precelerator Newsletter (Community Space)
                  </label>
                </li>
              </ul>
            </div>
            <div
              id="mergeRow-gdpr"
              className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div className="content__gdpr">
                <label>Erlaubnis zum Marketing</label>
                <p>
                  SCE wird die Informationen, die Sie in diesem Formular
                  angeben, dazu verwenden, mit Ihnen in Kontakt zu bleiben und
                  Ihnen Updates und Marketing-Informationen zu übermitteln.
                  Bitte lassen Sie uns wissen, auf welche Art und Weise Sie von
                  uns hören möchten:
                </p>
                <fieldset
                  className="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <label className="checkbox subfield" for="gdpr_1">
                    <input
                      type="checkbox"
                      id="gdpr_1"
                      name="gdpr[1]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>E-Mail</span>{" "}
                  </label>
                  <label className="checkbox subfield" for="gdpr_5">
                    <input
                      type="checkbox"
                      id="gdpr_5"
                      name="gdpr[5]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Postwurfsendung</span>{" "}
                  </label>
                  <label className="checkbox subfield" for="gdpr_9">
                    <input
                      type="checkbox"
                      id="gdpr_9"
                      name="gdpr[9]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Maßgeschneiderte Online-Werbung</span>{" "}
                  </label>
                </fieldset>
                <p>
                  Sie können Ihre Meinung jederzeit ändern, indem Sie auf den
                  Abbestellungs-Link klicken, den Sie in der Fußzeile jeder
                  E-Mail, die Sie von uns erhalten, finden können, oder indem
                  Sie uns unter no-reply@sce.de kontaktieren. Wir werden Ihre
                  Informationen mit Sorgfalt und Respekt behandeln. Weitere
                  Informationen zu unseren Datenschutzpraktiken finden Sie auf
                  unserer Website. Indem Sie unten klicken, erklären Sie sich
                  damit einverstanden, dass wir Ihre Informationen in
                  Übereinstimmung mit diesen Bedingungen verarbeiten dürfen.
                </p>
              </div>
              <div className="content__gdprLegal">
                <p>
                  We use Mailchimp as our marketing platform. By clicking below
                  to subscribe, you acknowledge that your information will be
                  transferred to Mailchimp for processing.{" "}
                  <a href="https://mailchimp.com/legal/" target="_blank">
                    Learn more about Mailchimp's privacy practices here.
                  </a>
                </p>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response"></div>
              <div className="response" id="mce-success-response"></div>
            </div>
            <div id="hiddenText" aria-hidden="true">
              <input
                type="text"
                name="b_d1a3af7000e32c2f97a63e317_163270c9bb"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Anmelden"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
