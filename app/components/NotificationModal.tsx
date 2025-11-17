'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Calendar, Megaphone, Ticket } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    icon: <Megaphone className="h-5 w-5 text-orange-400" />,
    text: 'Keynote speaker announced: Alex Johnson, CEO of InnovateX.',
    time: '2 hours ago',
  },
  {
    id: 2,
    icon: <Ticket className="h-5 w-5 text-green-400" />,
    text: 'Early bird ticket sales end in 3 days!',
    time: '1 day ago',
  },
  {
    id: 3,
    icon: <Calendar className="h-5 w-5 text-blue-400" />,
    text: 'New networking session added to the schedule for Day 2.',
    time: '2 days ago',
  },
];

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const panel = panelRef.current;
    if (modal && panel) {
      if (isOpen) {
        gsap.to(modal, { autoAlpha: 1, duration: 0.3 });
        gsap.fromTo(
          panel,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        gsap.to(panel, {
          y: -50,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
        gsap.to(modal, { autoAlpha: 0, duration: 0.4, delay: 0.1 });
      }
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen && modalRef.current?.style.visibility === 'hidden') return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/60 z-50 invisible flex justify-center items-start"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div
        ref={panelRef}
        className="absolute top-20 right-4 md:right-8 w-full max-w-md bg-gray-900/80 border border-gray-700 rounded-lg shadow-2xl p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close notifications"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-4 p-3 bg-gray-800/50 rounded-md">
              <div className="flex-shrink-0 mt-1">{notification.icon}</div>
              <div>
                <p className="text-sm text-gray-200">{notification.text}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
