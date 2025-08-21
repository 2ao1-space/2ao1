import PageNav from "./PageNav";

export default function FooterNav({ className, nextPage, prevPage }) {
  return (
    <div
      className={`flex justify-end items-center gap-2 overflow-hidden ${className}`}
    >
      {prevPage && (
        <PageNav
          link={prevPage}
          target={prevPage === "resume" ? "_blank" : "_self"}
        >
          {prevPage === "resume" ? "[ Resume ]" : "[ Back ]"}
        </PageNav>
      )}

      {nextPage && (
        <PageNav link={nextPage}>
          {nextPage === "/" || nextPage === "index"
            ? "[ Move to Index ]"
            : "[ Next Page ]"}
        </PageNav>
      )}
    </div>
  );
}
