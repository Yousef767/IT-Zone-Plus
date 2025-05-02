


function Footer() {

  return (
    <footer>
      {/* <div className="box footer">
        <div className="footerLogo">
          <img src="/media/footer-logo.png" alt="Footer Logo" />
        </div>

        <div className="footerLinkGroup">
          <div className="linkGroup">
            <h2>{lang === "en" ? "Helpful Links" : "روابط مساعدة"}</h2>
            <ul>
              {[
                { label: "Home", labelAr: "الرئيسية", path: "" },
                { label: "About Us", labelAr: "من نحن", path: "about" },
                { label: "Services", labelAr: "الخدمات", path: "services" },
                { label: "Partners", labelAr: "شركاؤنا", path: "partners" },
                { label: "Our Work", labelAr: "أعمالنا", path: "work" },
              ].map(({ label, labelAr, path }) => (
                <li key={path}>
                  <Link to={`/${path}`}>
                    <img
                      width={30}
                      height={30}
                      src="/media/icons/footerLink.png"
                      alt=""
                    />
                    {lang === "en" ? label : labelAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="linkGroup cont">
            <h2>{lang === "en" ? "Contact Us" : "تواصل معنا"}</h2>
            <ul>
              <li>
                <a href={"https://maps.app.goo.gl/YjDVSpjhQFNj73dF6?g_st=iw"} target="_blank">
                  <img src="/media/icons/footerLink.png" alt="" />
                  {lang === 'ar'? '  عمّان، الأردن':"Amman - Rabyah"}
                </a>
              </li>
              <li>
                <a href={`mailto:${data.email}`} target="_blank">
                  <img src="/media/icons/footerLink.png" alt="" />
                  {data.email}
                </a>
              </li>
              <li>
                <a href={`tel:${data.phone_number}`} target="_blank">
                  <img src="/media/icons/footerLink.png" alt="" />
                  {data.phone_number}
                </a>
              </li>
              <li>
                <a href="##">
                  <img src="/media/icons/footerLink.png" alt="" />
                  {lang === "en" ? "Social Media" : "منصاتنا"}:
                </a>
              </li>
            </ul>

            <div className="media">
              <a href={data.facebook_link} target={"_blank"}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={data.instagram_link} target={"_blank"}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={data.linkedin_link} target={"_blank"}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href={data.snapchat_link} target={"_blank"}>
                <i className="fa-brands fa-snapchat"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom
      <div className="copy">
        <span>
          {lang === "en" ? "All Rights Reserved" : "جميع الحقوق محفوظة"}
        </span>
        <span>
          <img src="/media/logo.png" alt="" />
          {lang === "en" ? "Development Team 2024 ©" : "فريق التطوير 2024 ©"}
        </span>
      </div> */}
    </footer>
  );
}

export default Footer;
