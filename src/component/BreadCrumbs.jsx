import { Fragment } from "react";

export function BreadCrumbs({ breadCrumbs }) {
  return (
    <>
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-3 py-2">
          <div className="flex items-center gap-3">
            <a className="" href="/">
              <span className="material-symbols-outlined text-green !text-3xl">
                home
              </span>
            </a>
            {breadCrumbs.map((breadCrumb, i) => (
              <Fragment key={i}>
                <span className="material-symbols-outlined text-green !text-lg">
                  arrow_forward_ios
                </span>
                <a href={breadCrumb.path} className="text-sm font-bold text-green">
                  {breadCrumb.title}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default BreadCrumbs;
