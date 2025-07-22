import NavbarLayout from "@/components/layout/NavbarLayout/NavbarLayout";

import LogoAndSlug from "@/components/container/LogoAndSlug/LogoAndSlug";
import SearchBar from "@/components/container/SearchBar/SearchBar";
import NavIconList from "@/components/container/NavIconList/NavIconList";

export default function PostNavigationBar() {
    return (
        <NavbarLayout>
            <div className="w-full py-1">
                <SearchBar />
            </div>
            <NavIconList />
        </NavbarLayout>
    )
}