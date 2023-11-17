import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
    return (
        <div className="m-4">
            <Input />
            <Button>Clique ici</Button>
        </div>
    );
}
