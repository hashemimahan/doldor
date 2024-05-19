import React from 'react';

const Profile = (props) => {
    return (
        <div className={"h-full grid grid-cols-4 gap-2 content-center"}>
            <div className={"w-20 aspect-square bg-amber-300 rounded-full"}
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            ></div>
            <p className={"flex flex-col gap-1 font-iranYekan text-2xl font-bold col-span-3 pr-2 2xl:pr-0"} dir={"rtl"}>
                <span className={"text-doldor_text"}>{props.post}</span>
                <span className={"text-doldor_orange"}>{props.name}</span>
            </p>
        </div>
    );
};

export default Profile;