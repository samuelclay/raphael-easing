/*
 * Raphael Easing - Adapted from jQuery Easing v1.3
*/ 

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// time: current time, beg: begInnIng value, diff: change/difference In value, dur: duration

Raphael.easing_formulas = {
	linear: function( time, beg, diff, dur ) {
		return time / dur;
	},
	easeInQuad: function (time, beg, diff, dur) {
		return diff*(time/=dur)*time + beg;
	},
	easeOutQuad: function (time, beg, diff, dur) {
		return -diff *(time/=dur)*(time-2) + beg;
	},
	easeInOutQuad: function (time, beg, diff, dur) {
		if ((time/=dur/2) < 1) return diff/2*time*time + beg;
		return -diff/2 * ((--time)*(time-2) - 1) + beg;
	},
	easeInCubic: function (time, beg, diff, dur) {
		return diff*(time/=dur)*time*time + beg;
	},
	easeOutCubic: function (time, beg, diff, dur) {
		return diff*((time=time/dur-1)*time*time + 1) + beg;
	},
	easeInOutCubic: function (time, beg, diff, dur) {
		if ((time/=dur/2) < 1) return diff/2*time*time*time + beg;
		return diff/2*((time-=2)*time*time + 2) + beg;
	},
	easeInQuart: function (time, beg, diff, dur) {
		return diff*(time/=dur)*time*time*time + beg;
	},
	easeOutQuart: function (time, beg, diff, dur) {
		return -diff * ((time=time/dur-1)*time*time*time - 1) + beg;
	},
	easeInOutQuart: function (time, beg, diff, dur) {
		if ((time/=dur/2) < 1) return diff/2*time*time*time*time + beg;
		return -diff/2 * ((time-=2)*time*time*time - 2) + beg;
	},
	easeInQuint: function (time, beg, diff, dur) {
		return diff*(time/=dur)*time*time*time*time + beg;
	},
	easeOutQuint: function (time, beg, diff, dur) {
		return diff*((time=time/dur-1)*time*time*time*time + 1) + beg;
	},
	easeInOutQuint: function (time, beg, diff, dur) {
		if ((time/=dur/2) < 1) return diff/2*time*time*time*time*time + beg;
		return diff/2*((time-=2)*time*time*time*time + 2) + beg;
	},
	easeInSine: function (time, beg, diff, dur) {
		return -diff * Math.cos(time/dur * (Math.PI/2)) + diff + beg;
	},
	easeOutSine: function (time, beg, diff, dur) {
		return diff * Math.sin(time/dur * (Math.PI/2)) + beg;
	},
	easeInOutSine: function (time, beg, diff, dur) {
		return -diff/2 * (Math.cos(Math.PI*time/dur) - 1) + beg;
	},
	easeInExpo: function (time, beg, diff, dur) {
		return (time==0) ? beg : diff * Math.pow(2, 10 * (time/dur - 1)) + beg;
	},
	easeOutExpo: function (time, beg, diff, dur) {
		return (time==dur) ? beg+diff : diff * (-Math.pow(2, -10 * time/dur) + 1) + beg;
	},
	easeInOutExpo: function (time, beg, diff, dur) {
		if (time==0) return beg;
		if (time==dur) return beg+diff;
		if ((time/=dur/2) < 1) return diff/2 * Math.pow(2, 10 * (time - 1)) + beg;
		return diff/2 * (-Math.pow(2, -10 * --time) + 2) + beg;
	},
	easeInCirc: function (time, beg, diff, dur) {
		return -diff * (Math.sqrt(1 - (time/=dur)*time) - 1) + beg;
	},
	easeOutCirc: function (time, beg, diff, dur) {
		return diff * Math.sqrt(1 - (time=time/dur-1)*time) + beg;
	},
	easeInOutCirc: function (time, beg, diff, dur) {
		if ((time/=dur/2) < 1) return -diff/2 * (Math.sqrt(1 - time*time) - 1) + beg;
		return diff/2 * (Math.sqrt(1 - (time-=2)*time) + 1) + beg;
	},
	easeInElastic: function (time, beg, diff, dur) {
		var s=1.70158;var p=0;var a=diff;
		if (time==0) return beg;  if ((time/=dur)==1) return beg+diff;  if (!p) p=dur*.3;
		if (a < Math.abs(diff)) { a=diff; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (diff/a);
		return -(a*Math.pow(2,10*(time-=1)) * Math.sin( (time*dur-s)*(2*Math.PI)/p )) + beg;
	},
	easeOutElastic: function (time, beg, diff, dur) {
		var s=1.70158;var p=0;var a=diff;
		if (time==0) return beg;  if ((time/=dur)==1) return beg+diff;  if (!p) p=dur*.3;
		if (a < Math.abs(diff)) { a=diff; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (diff/a);
		return a*Math.pow(2,-10*time) * Math.sin( (time*dur-s)*(2*Math.PI)/p ) + diff + beg;
	},
	easeInOutElastic: function (time, beg, diff, dur) {
		var s=1.70158;var p=0;var a=diff;
		if (time==0) return beg;  if ((time/=dur/2)==2) return beg+diff;  if (!p) p=dur*(.3*1.5);
		if (a < Math.abs(diff)) { a=diff; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (diff/a);
		if (time < 1) return -.5*(a*Math.pow(2,10*(time-=1)) * Math.sin( (time*dur-s)*(2*Math.PI)/p )) + beg;
		return a*Math.pow(2,-10*(time-=1)) * Math.sin( (time*dur-s)*(2*Math.PI)/p )*.5 + diff + beg;
	},
	easeInBounce: function (time, beg, diff, dur) {
		return diff - Raphael.easing_formulas.easeOutBounce (dur-time, 0, diff, dur) + beg;
	},
	easeOutBounce: function (time, beg, diff, dur) {
		if ((time/=dur) < (1/2.75)) {
			return diff*(7.5625*time*time) + beg;
		} else if (time < (2/2.75)) {
			return diff*(7.5625*(time-=(1.5/2.75))*time + .75) + beg;
		} else if (time < (2.5/2.75)) {
			return diff*(7.5625*(time-=(2.25/2.75))*time + .9375) + beg;
		} else {
			return diff*(7.5625*(time-=(2.625/2.75))*time + .984375) + beg;
		}
	},
	easeInOutBounce: function (time, beg, diff, dur) {
		if (time < dur/2) return Raphael.easing_formulas.easeInBounce (time*2, 0, diff, dur) * .5 + beg;
		return Raphael.easing_formulas.easeOutBounce (time*2-dur, 0, diff, dur) * .5 + diff*.5 + beg;
	}
};

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */