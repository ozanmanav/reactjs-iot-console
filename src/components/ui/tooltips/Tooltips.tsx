import React, { FunctionComponent } from 'react';
import './Tooltips.scss';
import { Icon } from '../';

interface TooltipProps {
    isOpen: boolean;
}

interface TimelineTooltipProps extends TooltipProps {
    date: string;
    title: string;
    user: string;
    tags?: string[];
}

export const TimelineTooltip: FunctionComponent<TimelineTooltipProps> = ({ date, title, user, tags, isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="b-timeline-tooltip">
            <div className="b-timeline-tooltip__header">
                <p className="h6 _text-grey">{date}</p>
                <p className="_text-white">{title}</p>
            </div>
            <div className="b-timeline-tooltip__footer">
                <p className="_font-bold _text-white">by {user}</p>
                <div className="flex">
                    {tags &&
                        tags.map((tag, index) => (
                            <span className="b-timeline-tooltip__tag _text-white" key={index}>
                                {tag}
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
};

interface InfoTooltipProps {
    text: string;
}

export const InfoTooltip: FunctionComponent<InfoTooltipProps> = ({ text }) => {
    return (
        <div className="b-info-tooltip">
            <Icon icon="info" />
            <div className="b-info-tooltip__content">{text}</div>
        </div>
    );
};
