goog.provide('ol.View');
goog.provide('ol.ViewHint');

goog.require('goog.array');
goog.require('goog.asserts');
goog.require('ol.IView');
goog.require('ol.Object');


/**
 * @enum {number}
 */
ol.ViewHint = {
  ANIMATING: 0,
  INTERACTING: 1
};



/**
 * @constructor
 * @implements {ol.IView}
 * @extends {ol.Object}
 */
ol.View = function() {

  goog.base(this);

  /**
   * @private
   * @type {Array.<number>}
   */
  this.hints_ = [0, 0];

};
goog.inherits(ol.View, ol.Object);


/**
 * @return {Array.<number>} Hint.
 */
ol.View.prototype.getHints = function() {
  return goog.array.clone(this.hints_);
};


/**
 * @inheritDoc
 */
ol.View.prototype.getView2D = goog.abstractMethod;


/**
 * @inheritDoc
 */
ol.View.prototype.getView3D = goog.abstractMethod;


/**
 * @param {ol.ViewHint} hint Hint.
 * @param {number} delta Delta.
 */
ol.View.prototype.setHint = function(hint, delta) {
  goog.asserts.assert(0 <= hint && hint < this.hints_.length);
  this.hints_[hint] += delta;
  goog.asserts.assert(this.hints_[hint] >= 0);
};
