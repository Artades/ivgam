import { LinkItemProps } from '@/interfaces/link.interface';
import React, { FC } from 'react';
import LinkItem from './link-item';

interface LinkSectionProps {
    links: LinkItemProps[] | null | undefined;
}
const LinkSection:FC<LinkSectionProps> = ({links}) => {
    return (
        <div className='w-full grid lg:grid-cols-3  grid-cols-2 my-10 gap-4'>
        {
            links?.map(link => (<LinkItem key={link.id} title={link.title} path={link.path} imageUrl={link.imageUrl}  recent={link.recent}/>))
        }
        </div>
    );
};

export default LinkSection;