'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
      setCheckIn(undefined);
      setCheckOut(undefined);
      setGuests('2');
      setRoomType('');
      setName('');
      setEmail('');
      setPhone('');
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl">{t.booking.title}</DialogTitle>
              <DialogDescription className="text-base">
                {t.booking.description}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="check-in">{t.booking.checkIn}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !checkIn && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, 'PPP') : t.booking.selectDate}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="check-out">{t.booking.checkOut}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !checkOut && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, 'PPP') : t.booking.selectDate}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < (checkIn || new Date())}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guests">{t.booking.guests}</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 {t.booking.guest}</SelectItem>
                      <SelectItem value="2">2 {t.booking.guestsPlural}</SelectItem>
                      <SelectItem value="3">3 {t.booking.guestsPlural}</SelectItem>
                      <SelectItem value="4">4 {t.booking.guestsPlural}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="room-type">{t.booking.roomType}</Label>
                  <Select value={roomType} onValueChange={setRoomType}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.booking.selectRoomType} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">{t.booking.roomTypes.deluxe}</SelectItem>
                      <SelectItem value="premium">{t.booking.roomTypes.premium}</SelectItem>
                      <SelectItem value="signature">{t.booking.roomTypes.signature}</SelectItem>
                      <SelectItem value="royal">{t.booking.roomTypes.royal}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">{t.booking.fullName}</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.booking.fullNamePlaceholder}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.booking.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.booking.emailPlaceholder}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t.booking.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.booking.phonePlaceholder}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-sm tracking-[0.2em] uppercase"
                disabled={!checkIn || !checkOut || !roomType}
              >
                {t.booking.confirm}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-2">{t.booking.successTitle}</h3>
              <p className="text-muted-foreground">
                {t.booking.successMessage}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
